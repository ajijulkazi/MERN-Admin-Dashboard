import React from 'react'
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    listClasses,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
    useTheme

} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutline,
    PieChartOutlined

} from "@mui/icons-material";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profile.JPG";

const navItem = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />
    },
    {
        text: "Client Facing",
        icon: null,
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />
    },
    {
        text: "Geography",
        icon: <PublicOutlined />
    },
    {
        text: "Sales",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />
    },
    {
        text: "Daily",
        icon: <TodayOutlined />
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />
    },
]

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])
  return (
    <Box component="nav">
        <Drawer
          open={isSidebarOpen}
          variant="persistent"
          onClose={setIsSidebarOpen(false)}
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': { 
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.background.alt,
                boxSizing: 'border-box',
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth 
                }
          }}
        >
          <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                            <Typography variant='h4' fontWeight="bold">
                                KAZICOMPANY
                            </Typography>
                        </Box>
                        {!isNonMobile && (
                            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <ChevronLeft />
                            </IconButton>
                        )}
                    </FlexBetween>

                </Box>
                <list>
                    {navItem.map(({ text, icon}) => {
                        if(!icon) {
                            return (
                                <Typography key={text} sx = {{m: "2.25rem 0 1rem 3rem"}}>
                                    {text}
                                </Typography>
                            );
                        }
                    })}
                </list>
          </Box>
        </Drawer>
    </Box>
  )
}

export default Sidebar