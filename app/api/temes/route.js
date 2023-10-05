import { NextResponse } from "next/server";
import connect from "../../../db";
import Teme from "../../../models/Teme";

export const GET = async (request) => {
  try {
    await connect();
  } catch (error) {
    return NextResponse("Error in fetching temes" + error, { status: 500 });
  }
};
