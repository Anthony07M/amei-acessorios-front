import { Menu } from "../../components/Menu";
import { Product } from "../../components/Product";
import { Container } from "./styles";

export const Products = () => {
    return (
        <Container>
            <Menu />
            <main>
                <Product />
                <Product />
                <Product />
            </main>
        </Container>
    );
};
