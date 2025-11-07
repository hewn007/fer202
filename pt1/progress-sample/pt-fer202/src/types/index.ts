// filepath: pt-fer202/src/types/index.ts

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface Payment {
    id: string;
    amount: number;
    date: string;
    status: 'pending' | 'completed' | 'failed';
}

export interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface FilterOptions {
    status: 'all' | 'pending' | 'completed' | 'failed';
    dateRange: [Date | null, Date | null];
}