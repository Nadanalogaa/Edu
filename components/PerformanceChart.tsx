import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Area, AreaChart } from 'recharts';
import { PerformanceDataPoint } from '../types';

interface PerformanceChartProps {
  data: PerformanceDataPoint[];
  type?: 'line' | 'bar' | 'area';
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const getPerformanceEmoji = (score: number) => {
      if (score >= 90) return '🏆';
      if (score >= 75) return '🌟';
      if (score >= 60) return '👍';
      if (score >= 50) return '📈';
      return '💪';
    };

    const getPerformanceText = (score: number) => {
      if (score >= 90) return 'Excellent!';
      if (score >= 75) return 'Great Job!';
      if (score >= 60) return 'Good Work!';
      if (score >= 50) return 'Keep Going!';
      return 'Need Practice';
    };

    // Multi-subject tooltip
    if (payload.length > 1) {
      return (
        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-2xl border-2 border-indigo-500/30 backdrop-blur-sm">
          <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">{label}</p>
          <div className="space-y-2">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: entry.color }}></div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{entry.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{getPerformanceEmoji(entry.value)}</span>
                  <span className="text-lg font-bold" style={{ color: entry.color }}>{entry.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Single subject tooltip
    const score = payload[0].value;
    return (
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-2xl border-2 border-indigo-500/30 backdrop-blur-sm">
        <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2">{label}</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getPerformanceEmoji(score)}</span>
          <div>
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{score}%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{getPerformanceText(score)}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, type = 'area' }) => {
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

  const colors = {
    dark: {
      grid: '#334155',
      text: '#94a3b8',
      tooltip: '#1e293b',
      line: '#818cf8',
      lineSecondary: '#a78bfa',
      bar: '#818cf8',
      areaStart: '#818cf8',
      areaEnd: '#a78bfa',
    },
    light: {
      grid: '#e2e8f0',
      text: '#64748b',
      tooltip: '#ffffff',
      line: '#6366f1',
      lineSecondary: '#8b5cf6',
      bar: '#6366f1',
      areaStart: '#6366f1',
      areaEnd: '#8b5cf6',
    }
  };

  const currentColors = colors[theme];

  // Subject-specific colors for multi-line charts - vibrant and distinct
  const subjectColors = {
    Physics: '#ff6b6b',      // Bright red/pink
    Chemistry: '#4ecdc4',    // Bright cyan/turquoise
    Biology: '#4caf50',      // Bright green
  };

  // Check if data contains multiple subjects (multi-line mode)
  const isMultiSubject = data.length > 0 && ('Physics' in data[0] || 'Chemistry' in data[0] || 'Biology' in data[0]);

  return (
    <div className="h-80 bg-gradient-to-br from-white to-indigo-50/30 dark:from-slate-800/50 dark:to-indigo-900/10 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <ResponsiveContainer width="100%" height="100%">
        {isMultiSubject ? (
          // Multi-subject Line Chart for better visibility
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={currentColors.grid} opacity={0.3} />
            <XAxis
              dataKey="date"
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
            />
            <YAxis
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: currentColors.line, strokeWidth: 2, strokeDasharray: '5 5' }} />
            <Legend
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
            />
            <Line
              type="monotone"
              dataKey="Physics"
              name="Physics"
              stroke={subjectColors.Physics}
              strokeWidth={4}
              dot={{ fill: subjectColors.Physics, strokeWidth: 2, stroke: '#fff', r: 6 }}
              activeDot={{ r: 9, fill: subjectColors.Physics, stroke: '#fff', strokeWidth: 3 }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
            <Line
              type="monotone"
              dataKey="Chemistry"
              name="Chemistry"
              stroke={subjectColors.Chemistry}
              strokeWidth={4}
              dot={{ fill: subjectColors.Chemistry, strokeWidth: 2, stroke: '#fff', r: 6 }}
              activeDot={{ r: 9, fill: subjectColors.Chemistry, stroke: '#fff', strokeWidth: 3 }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
            <Line
              type="monotone"
              dataKey="Biology"
              name="Biology"
              stroke={subjectColors.Biology}
              strokeWidth={4}
              dot={{ fill: subjectColors.Biology, strokeWidth: 2, stroke: '#fff', r: 6 }}
              activeDot={{ r: 9, fill: subjectColors.Biology, stroke: '#fff', strokeWidth: 3 }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </LineChart>
        ) : type === 'area' ? (
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={currentColors.areaStart} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={currentColors.areaEnd} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={currentColors.grid} opacity={0.3} />
            <XAxis
              dataKey="date"
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
            />
            <YAxis
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: currentColors.line, strokeWidth: 2, strokeDasharray: '5 5' }} />
            <Area
              type="monotone"
              dataKey="score"
              stroke={currentColors.line}
              strokeWidth={3}
              fill="url(#colorScore)"
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        ) : type === 'line' ? (
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={currentColors.line} />
                <stop offset="100%" stopColor={currentColors.lineSecondary} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={currentColors.grid} opacity={0.3} />
            <XAxis
              dataKey="date"
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
            />
            <YAxis
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: currentColors.line, strokeWidth: 2, strokeDasharray: '5 5' }} />
            <Line
              type="monotone"
              dataKey="score"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{
                fill: currentColors.line,
                strokeWidth: 2,
                stroke: '#fff',
                r: 5
              }}
              activeDot={{
                r: 8,
                fill: currentColors.line,
                stroke: '#fff',
                strokeWidth: 3,
                filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.6))'
              }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </LineChart>
        ) : (
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={currentColors.bar} stopOpacity={0.9} />
                <stop offset="100%" stopColor={currentColors.lineSecondary} stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={currentColors.grid} opacity={0.3} />
            <XAxis
              dataKey="date"
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
            />
            <YAxis
              stroke={currentColors.text}
              fontSize={12}
              tick={{ fill: currentColors.text }}
              axisLine={{ stroke: currentColors.grid }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }} />
            <Bar
              dataKey="score"
              fill="url(#barGradient)"
              radius={[8, 8, 0, 0]}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
