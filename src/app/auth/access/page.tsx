'use client'

import { Button } from "@mui/material";
import { redirectToSSO } from "./redirectToSSO";

export default function Access() {
  return <Button variant="contained" onClick={redirectToSSO}>Acessar</Button>
}