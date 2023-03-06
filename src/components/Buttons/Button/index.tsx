import { Container } from "./styles";

interface IButtonProps {
    text: string
}

export const Button = ({ text }: IButtonProps) => {
    return (
        <Container>
            {text}
        </Container>
    );
}