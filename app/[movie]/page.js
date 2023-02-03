import Image from "next/image";

export default async function MovieDetail({params}){
  const {movie}=params
  const data= await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res= await data.json()
  const {title,release_date,runtime,poster_path,status}=res
  const img_path=`https://image.tmdb.org/t/p/original/${poster_path}`

  return(
    <div>
      <Image src={img_path} height={1000} width={1000} className='w-full' priority></Image>
      <h2>{title}</h2>
      <h2>{release_date}</h2>
      <h2>Runtime: {runtime} minutes</h2>
      <button className="bg-green-600 text-xs my-y p-2 rounded">{status}</button>
    </div>
  )
}