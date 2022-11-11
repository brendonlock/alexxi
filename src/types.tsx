export interface ThemeContext {
    mode: string,
    toggle (): void;
}

export interface Props {
    children: React.ReactNode;
}