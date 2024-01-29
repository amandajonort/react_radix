import React from "react";
import {
  Flex,
  Button,
  Link,
  TextField,
  Box,
  Avatar,
  Card,
} from "@radix-ui/themes";
import Diagram from "./Diagram";

export default function MyApp() {
  return (
    <>
      {/* <ThemePanel></ThemePanel> */}

      {/* container för hela sidan, med border */}
      <div
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          width: "70%",
          margin: "0 auto",
          boxShadow: "2px 2px lightgrey",
        }}
      >
        {/* navbar */}

        <Flex
          style={{ padding: "8px", borderBottom: "1px solid gray" }}
          className="nav"
          direction="row"
          gap="5"
          justifyContent="space-between"
          align={"center"}
        >
          <Button>Alicia Koch</Button>

          <Link
            style={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            Overview
          </Link>
          <Link>Customers</Link>
          <Link>Products</Link>
          <Link>Settings</Link>

          {/* searchbar */}
          <TextField.Input variant="surface" placeholder="Search" />

          <Avatar
            style={{ borderRadius: "25px" }}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
        </Flex>
        {/* slut på navbar */}

        {/* div-container för hela dashboard */}
        <div
          className="daschboradContainer"
          style={{
            padding: "20px",
          }}
        >
          <div>
            <h1>Dashboard</h1>
          </div>

          {/* mini-nav*/}
          <Flex
            direction="row"
            gap="4"
            justifyContent="center"
            align={"center"}
            style={{
              borderRadius: "10px",
              maxWidth: "400px",
              padding: "4px",
              backgroundColor: "lightgrey",
            }}
          >
            <Link
              style={{
                fontWeight: "bold",
                color: "black",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "4px",
              }}
            >
              Overview
            </Link>
            <Link>Analytics</Link>
            <Link>Reports</Link>
            <Link>Notifications</Link>
            {/* slut på mini-nav */}
          </Flex>

          {/* flex-container för 4 boxar */}
          <Flex gap="3" style={{ paddingTop: "20px" }}>
            <Box
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                width: "300px",
                padding: "10px",
                boxShadow: "2px 2px lightgrey",
              }}
            >
              <h3>Total Revenue</h3>
              <h2 style={{ margin: "0px" }}>$45,231.89</h2>
              <p style={{ color: "gray", margin: "0px" }}>
                +20.1% from last month
              </p>
            </Box>
            <Box
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                width: "300px",
                padding: "10px",
                boxShadow: "2px 2px lightgrey",
              }}
            >
              <h3>Subscriptions</h3>
              <h2 style={{ margin: "0px" }}>+2350</h2>
              <p style={{ color: "gray", margin: "0px" }}>
                +180.1% from last month
              </p>
            </Box>
            <Box
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                width: "300px",
                padding: "10px",
                boxShadow: "2px 2px lightgrey",
              }}
            >
              <h3>Sales</h3>
              <h2 style={{ margin: "0px" }}>+12,234</h2>
              <p style={{ color: "gray", margin: "0px" }}>
                +19% from last month
              </p>
            </Box>
            <Box
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                width: "300px",
                padding: "10px",
                boxShadow: "2px 2px lightgrey",
              }}
            >
              <h3>Active Now</h3>
              <h2 style={{ margin: "0px" }}>+573</h2>
              <p style={{ color: "gray", margin: "0px" }}>
                +201% from last hour
              </p>
            </Box>
          </Flex>

          {/* flex-container för 2 boxar */}
          <Flex style={{ marginTop: "10px" }}>
            <Box
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                width: "760px",
                padding: "10px",
                boxShadow: "2px 2px lightgrey",
              }}
            >
              <h2>Overview</h2>
              <Diagram></Diagram>
            </Box>

            <Box
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                marginLeft: "20px",
                width: "460px",
                padding: "20px",
                boxShadow: "2px 2px lightgrey",
              }}
            >
              <h2>Recent Sales</h2>
              <p>You made 265 sales this month.</p>
              <Box>
                <Card>
                  <Avatar></Avatar>
                  <p>Olivia Martin</p>
                  <p>+$1,999.00</p>
                </Card>
                <Card>
                  <Avatar></Avatar>
                  <p>Olivia Martin</p>
                  <p>+$1,999.00</p>
                </Card>
              </Box>
            </Box>
          </Flex>

          {/* slut på dashboard-container */}
        </div>
      </div>
    </>
  );
}
