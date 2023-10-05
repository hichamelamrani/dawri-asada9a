import { NextResponse } from "next/server";
import connect from "../../../db";
import Teme from "../../../models/Teme";

export const GET = async (request) => {
  try {
    await connect();
    const teme = await Teme.findOne({});

    return new NextResponse(JSON.stringify(teme), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Error in fetching temes" + error, { status: 500 });
  }
};
