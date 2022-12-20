import Image from "next/image";

export default function Img({ src, alt, data }) {
  return <Image src={src} alt={alt} />;
}
