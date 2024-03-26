import React from "react";
import logo1 from "../../../assets/sponser/logo1.png";
import logo2 from "../../../assets/sponser/logo2.png";
import logo3 from "../../../assets/sponser/logo3.png";
import logo4 from "../../../assets/sponser/logo4.png";
import logo5 from "../../../assets/sponser/logo5.png";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const logos = [logo1, logo2, logo3, logo4, logo5];
const Sponser = () => {
  return (
    <div className="py-50">
      <Container>
        <Marquee>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="logo"
                width={200}
                height={100}
              />
            ))}
          </Stack>
        </Marquee>
      </Container>
    </div>
  );
};

export default Sponser;
