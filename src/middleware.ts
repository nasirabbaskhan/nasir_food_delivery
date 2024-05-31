// import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";
// export default clerkMiddleware();
// export const config = {
//   matcher: ["/"],
// };
import { clerkMiddleware ,authMiddleware} from "@clerk/nextjs/server";

// Correctly export the middleware function


export default authMiddleware({

});

export const config = {
  matcher: [],
};