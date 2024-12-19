import { Card, Col, Container, Row } from "react-bootstrap";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Style4 = () => {
    return (
        <>
            <Container>

                <div className='text-center my-5'>
                    <h2>Style 4</h2>
                    <p className="w-50 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                </div>

                <Row>

                    <Col>
                        <Card className="p-3 product-card4 bg-white d-flex flex-column" style={{ width: '18rem' }}>
                            <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                    <img src="/public/Styl1.jpg" alt="card1" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="javascript:void(0)quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <Card.Body className="text-center">
                                <span>Organic fresh apple juice</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2">Lorem ipsum dolor adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="p-3 product-card4 bg-white d-flex flex-column" style={{ width: '18rem' }}>
                            <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                    <img src="/public/Styl2.jpg" alt="card1" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="javascript:void(0)quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <Card.Body className="text-center">
                                <span>Organic fresh apple juice</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2">Lorem ipsum dolor adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="p-3 product-card4 bg-white d-flex flex-column" style={{ width: '18rem' }}>
                            <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                    <img src="/public/Styl3.jpg" alt="card1" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="javascript:void(0)quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <Card.Body className="text-center">
                                <span>Organic fresh apple juice</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2">Lorem ipsum dolor adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="p-3 product-card4 bg-white d-flex flex-column" style={{ width: '18rem' }}>
                            <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                    <img src="/public/Styl4.jpg" alt="card1" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="javascript:void(0)quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <Card.Body className="text-center">
                                <span>Organic fresh apple juice</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2">Lorem ipsum dolor adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Style4;