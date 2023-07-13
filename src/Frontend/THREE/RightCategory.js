import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbArrowsMoveHorizontal } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";
import Cart1 from "./Cart1";

function RightCategory() {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <Row>
        <Col>
          <h1 className="ml-10 font-extrabold text-3xl font-sans md:font-Roboto">
            Black Boski
          </h1>
          <p className="ml-12 mt-4 text-sm text-gray-400">
            Rs.4,000
            <span className="text-orange-700 ml-2 text-xl">Rs.2,450</span>
          </p>
          <p className="border-b ml-12 mt-2"></p>
          <ul className="ml-10 mt-6">
            <li className="m-2" style={{ font: "bold" }}>
              Fabric:{" "}
              <span>
                Boski – lavish Boski FALL | Plain | Wrinkle Free | Poly Viscose
                | Soft & Smooth
              </span>
            </li>
            <li className="m-2">
              Season: <span>Tropical</span>
            </li>
            <li className="m-2">
              Length: <span>4 meters</span>
            </li>
            <li className="m-2">
              Width: <span>56+ inches</span>
            </li>
            <li className="m-2">
              Warranty: <span>7 days refund policy without any question.</span>
            </li>
            <li className="m-2">
              Design: <span>Plain</span>
            </li>
            <li className="m-2">
              Styles: <span>Bright, Solid</span>
            </li>
            <li className="m-2">Light Weight & Fall Finish</li>
            <li className="m-2">Easy exchange or return available</li>
          </ul>

          <Button
              className="bg-zinc-800 relative hover:bg-yellow-700 w-60 h-16 ml-36 mt-8 text-lg "
              style={{ borderRadius: "0", border: "none" }}
              onClick={() => setOpen(!open)}
            >
              Buy now
            </Button>
            {!open ? <Cart1 /> : null}

          <h1
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "30px",
            }}
            className="ml-12 hover:text-yellow-700"
          >
            <IoIosHeartEmpty /> <span className="ml-2">ADD TO WISHLIST</span>{" "}
            <h1
              style={{ display: "flex", justifyContent: "flex-start" }}
              className="ml-8"
            >
              <TbArrowsMoveHorizontal />{" "}
              <span className="ml-2">ADD TO COMPARE</span>{" "}
            </h1>{" "}
          </h1>
          <p className="border-b ml-12 mt-10"></p>
          <p className="mt-8 ml-12">
            Category: <span className="hover:underline">Boski</span>
          </p>
          <p className="border-b ml-12 mt-8"></p>
          <h1
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "30px",
            }}
            className="ml-12 mt-6 space-x-3 text-3xl hover:text-yellow-700"
          >
            <TiSocialFacebook /> <AiOutlineTwitter /> <AiOutlineInstagram />{" "}
            <TiSocialPinterest />
          </h1>
        </Col>
      </Row>
    </div>
  );
}

export default RightCategory;
