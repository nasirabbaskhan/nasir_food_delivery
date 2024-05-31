import { validateDelete, validatePostData, validateUserid } from "@/utils/util";
import { NextRequest, NextResponse } from "next/server";
import { foodTable, db } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";

export const GET = async (req: NextRequest) => {
  const url = req.nextUrl.searchParams;
  const user_id = url.get("userid") as string;
  //console.log("userid", user_id);
  try {
    if (url.has("userid")) {
      const { userid } = validateUserid.parse({ userid: user_id });
      //console.log("userid5", userid);
      const res = await db
        .select()
        .from(foodTable)
        .where(eq(foodTable.userid, userid));

      return NextResponse.json(res);
    } else {
      throw new Error("user id not found");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  console.log("shaddi", req);
  const validatedBody = validatePostData.parse(req);
  console.log("dusrishadi", validatedBody);
  // req = validatedBody both are
  // here validatedBody is used on the place of req because it provide types

  try {
    // to check data is already exist or not
    const alreadyData = await db
      .select()
      .from(foodTable)
      .where(
        and(
          eq(foodTable.userid, validatedBody.userid),
          eq(foodTable.foodid, validatedBody.foodid)
        )
      );
    console.log("already,", alreadyData);
    // if data is already exist than update the quantity
    if (alreadyData.length > 0) {
      const updatedata = {
        userid: validatedBody.userid,
        foodid: validatedBody.foodid,
        quantity: validatedBody.quantity,
      };
      await db
        .update(foodTable)
        .set(updatedata)
        .where(
          and(
            eq(foodTable.userid, validatedBody.userid),
            eq(foodTable.foodid, validatedBody.foodid)
          )
        );
      return NextResponse.json("OK");
    } else {
      const cartData = await db
        .insert(foodTable)
        .values(validatedBody)
        .returning();
      console.log("cartshadi", cartData);
      return NextResponse.json(cartData);
    }
  } catch (error) {
    //console.log((error as { message: string }).message);
    return NextResponse.json({ error: (error as { message: string }).message });
  }
};

// export const PUT = async (request: NextRequest) => {
//   const req = await request.json();
//   const validatedBody = validatePostData.parse(req);
//   try {
//     const res = await db
//       .update(foodTable)
//       .set(validatedBody)
//       .where(
//         and(
//           eq(foodTable.userid, validatedBody.userid),
//           eq(foodTable.productid, validatedBody.productid)
//         )
//       )
//       .returning();
//     return NextResponse.json("OK");
//   } catch (error) {
//     //console.log((error as { message: string }).message);
//     return NextResponse.json({ error: (error as { message: string }).message });
//   }
// };

// export const DELETE = async (request: NextRequest) => {
//   const url = request.nextUrl.searchParams;
//   const user_id = url.get("userid") as string;
//   const product_id = url.get("productid") as string;
//   const { userid, productid } = validateDelete.parse({
//     userid: user_id,
//     productid: product_id,
//   });

//   try {
//     await db
//       .delete(foodTable)
//       .where(
//         and(eq(foodTable.userid, userid), eq(foodTable.productid, productid))
//       )
//       .returning();
//     return NextResponse.json("OK");
//   } catch (error) {
//     //console.log((error as { message: string }).message);
//     return NextResponse.json({ error: (error as { message: string }).message });
//   }
// };
