import { useUser } from "@clerk/nextjs";




export default async function page() {
    // const { user } = useUser();
//     const userid= useUser().user?.id
//     // const userid = user?.id as string;
//   console.log("userNasirAneela", userid);
   
    // const data = await getAllUserIDCardProducts(userid)
    
//     const { user } = useUser();
//   const userid = user?.id as string;
//   console.log("today data", userid)
  return (
    <>
   <p>hi</p>
    </>
  )
}
// async function getAllUserIDCardProducts(user_id: string) {
//     const res = await fetch(
//     `http://localhost:3000/api/food/?userid=${user_id}`
//   );
//   if (!res.ok) {
//     return "Error";
//   }
//   const response = res.json();
//   return response;
// }