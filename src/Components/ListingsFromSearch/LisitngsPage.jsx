import { Box, Button, ButtonGroup, Heading } from "@chakra-ui/core";
import React, { Component } from "react";
import ListingCard from "./ListingCard";

class LisitngsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lisitngs: [
        {
          subtitle: "Private room in the center of London",
          title: "Stay at this spacious Edwardian house",
          bookmark: false,
          amenities: "1 guest - 1 bedroom - 1 bed - WIFI - Kitchen",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHM7RqfQF6FHwPtp9eXzRFOOvP6y6tkOdf6g&usqp=CAU",
          rating: 4.5,
          price: 1958,
        },
        {
          subtitle: "Private room in the center of London",
          title: "Stay at this spacious Edwardian house",
          url:
            "data:image/jpeg;base64,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",
          bookmark: false,
          amenities: "1 guest - 1 bedroom - 1 bed - WIFI - Kitchen",
          rating: 4.5,
          price: 1958,
        },
        {
          subtitle: "Private room in the center of London",
          title: "Stay at this spacious Edwardian house",
          url:
            "data:image/jpeg;base64,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",
          bookmark: false,
          amenities: "1 guest - 1 bedroom - 1 bed - WIFI - Kitchen",
          rating: 4.5,
          price: 1958,
        },
      ],
    };
  }

  render() {
    return (
      <Box px="80px" py={10}>
        <Heading fontFamily="Montserrat" mb={3} fontWeight={600}>
          Stays Nearby
        </Heading>
        <ButtonGroup spacing={4}>
          <Button variant="outline" rounded="50px">
            Price
          </Button>
          <Button variant="outline" rounded="50px">
            Rooms and Beds
          </Button>
          <Button variant="outline" rounded="50px">
            Location
          </Button>
          <Button variant="outline" rounded="50px">
            Rating
          </Button>
        </ButtonGroup>
        {this.state.lisitngs.map((item) => (
          <ListingCard {...item} />
        ))}
      </Box>
    );
  }
}

export default LisitngsPage;