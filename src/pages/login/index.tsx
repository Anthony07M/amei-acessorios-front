import { LoginForm } from '../../components/Forms/Login';
import { Black, Container, Red } from './styles';
import logo from '../../assets/logo.png';

export const Login = () => {
    return (
        <Container>
            <Black>
                <div>
                    <img src={logo} alt="logo" />
                    <h1>We Ideat... Design code.. Test... & Launch</h1>
                </div>
            </Black>
            <Red> <h1>We Ideat... Design code.. Test... & Launch</h1></Red>
            <LoginForm />
        </Container>
    );
};
