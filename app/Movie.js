import Image from "next/image";
import Link from "next/link";

export default function Movie({movie}){
  // console.log(movie);
  const {title,id,release_date,poster_path}=movie
  const img_path=`https://image.tmdb.org/t/p/original${poster_path}`
  return(
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
      <Image src={img_path} width={800} height={800} alt='title'></Image>
      </Link>
    </div>
  )
}