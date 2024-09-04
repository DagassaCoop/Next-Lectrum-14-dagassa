import { NextResponse } from "next/server";

const middleware = () => {
  const response = NextResponse.next();

  response.cookies.set("name", "Dmytro");
  if (response.cookies.get('visited')) response.cookies.set('visited', 'true')
  response.cookies.set(`visited`, 'false');

  return response;
};

export { middleware };
