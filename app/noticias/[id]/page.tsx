export default function Page({params}: {params: {id: string}}) {
  return <p>{`Detalle noticia: ${params.id}`}</p>;
}