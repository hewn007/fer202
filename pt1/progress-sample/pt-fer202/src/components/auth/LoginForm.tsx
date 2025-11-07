import React, { useState } from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { validateEmail, validatePassword } from '../../utils/validation';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { email?: string; password?: string } = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!validatePassword(password)) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Handle login logic here
        console.log('Logging in with:', { email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                error={errors.email}
            />
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                error={errors.password}
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;