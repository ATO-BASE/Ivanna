import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface PasswordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
  correctPassword: string;
}

const PasswordDialog = ({ open, onOpenChange, onSuccess, correctPassword }: PasswordDialogProps) => {
  const { t } = useLanguage();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (password === correctPassword) {
      setError(false);
      setPassword('');
      onOpenChange(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('projects.passwordTitle')}</DialogTitle>
          <DialogDescription>{t('projects.passwordDescription')}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Input
            type="password"
            placeholder={t('projects.passwordPlaceholder')}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            className={error ? 'border-destructive' : ''}
          />
          {error && (
            <p className="text-sm text-destructive mt-2">{t('projects.passwordError')}</p>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('projects.cancel')}
          </Button>
          <Button onClick={handleSubmit}>{t('projects.submit')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordDialog;
