import { ProductList } from "../../api/products";
import { Card, Col, Container, Row} from "react-bootstrap"

interface IProductTable{
    products: ProductList[]
}
export const ProductTable =(props: IProductTable) => {
    //Render the product lists here
    // console.log(JSON.stringify(props.products))
    return(
        <div className="list">
            {props.products.slice(0,3).map((value: ProductList, index: number) =>{
                return(
                    <div key={index} className="container">
                        <h5>{value.product_name}</h5>
                        <hr />
                        <div>
                            <div>
                                <Container fluid className="py-2 overflow-hidden">
                                    <Row className=" d-flex flex-row flex-nowrap">
                                        <Col>
                                        <Card className="cardList">
                                            <Row className="no-gutters">
                                                <Col md='5'>
                                            <Card.Img  src={value.image} />
                                            </Col>
                                            <Col md='7'>
                                            <Card.Body>
                                                <Card.Text><strong>{value.product_name}</strong></Card.Text>
                                                <Card.Text>{value.brand_name}</Card.Text>
                                                <Card.Text>Location: {value.address.city}</Card.Text>
                                                <Card.Text><strong>${value.price}</strong></Card.Text>
                                                <Card.Text>Date: {value.time}</Card.Text>
                                                <Card.Text>{value.discription}</Card.Text>
                                            </Card.Body>
                                            </Col>
                                            </Row>
                                        </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}