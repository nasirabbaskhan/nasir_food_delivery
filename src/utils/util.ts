import z from "zod";

export const validateUserid = z.object({
  userid: z.string(),
});

// it is for type safty
export const validatePostData = z.object({
  userid: z.string(),
  foodid: z.string(),
  quantity: z.number(),
});

export const validateDelete = z.object({
  userid: z.string(),
  productid: z.string(),
});
