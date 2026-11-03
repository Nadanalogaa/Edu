import React, { useState } from 'react';
import api from '../../services/api';
import { Modal, Field, TextInput, Button, Alert, apiError } from './ui';

const ChangePasswordModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (newPassword.length < 6) return setError('New password must be at least 6 characters');
    if (newPassword !== confirmPassword) return setError('The new passwords do not match');

    setSaving(true);
    try {
      await api.put('/auth/password', { currentPassword, newPassword });
      setDone(true);
    } catch (err) {
      setError(apiError(err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title="Change password" onClose={onClose}>
      {done ? (
        <div className="space-y-4">
          <Alert tone="success">Your password has been changed. Use the new password next time you sign in.</Alert>
          <Button onClick={onClose} className="w-full">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <Field label="Current password">
            <TextInput type="password" autoComplete="current-password" required value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
          </Field>
          <Field label="New password" hint="At least 6 characters">
            <TextInput type="password" autoComplete="new-password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </Field>
          <Field label="Confirm new password">
            <TextInput type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Field>
          {error && <Alert>{error}</Alert>}
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? 'Saving…' : 'Change password'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ChangePasswordModal;
