import Image from "next/image";
import { useState } from "react";
export default function image() {
  const [loading, setLoading] = useState(true);
  return loading ? (
    <></>
  ) : (
    <Image
      src={image_3_b}
      width={image_3_b.width}
      height={image_3_b.height}
      alt="Picture of the author"
    />
  );
}
