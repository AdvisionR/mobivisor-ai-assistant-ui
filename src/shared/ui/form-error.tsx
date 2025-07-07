type FormErrorProps = {
    message?: string;
};

export default function FormError({ message }: FormErrorProps) {
    if (!message) return null;

    return <p className="text-red-500 text-xs mt-1">{message}</p>
}