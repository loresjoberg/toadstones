"use client"; // This is a client component 👈🏽

import {Container} from "@mantine/core";
import React from "react";
import {Outlet} from "react-router-dom";


export default function AdminLayout() {

    return (<Container mt="xl" mb="xl" fluid>
                <Outlet/>
            </Container>);
}
