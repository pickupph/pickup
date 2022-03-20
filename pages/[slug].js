//
import { WP_API_URL, WP_PER_PAGE } from "../config/constants"

// Components
import LayoutDefault from "../components/templates/layoutDefault"
import Bottom from "../components/bottom"

export default function Page({ _page }) {

  const page = _page[0]

  return (
    <LayoutDefault
      meta={{
        title: page.title.rendered
      }}
    >
      
      <section className={`p-5 w-full`}>
        <div className="container mx-auto">
          <h1 className="text-[40px] mb-5">{page.title.rendered}</h1>
          <div className="editor" dangerouslySetInnerHTML={{__html: page.content.rendered}} />
        </div>
      </section>
      

      <Bottom />

    </LayoutDefault>
    
  )
}

export async function getStaticProps({ params }) {

  // Get data
  const slug = params.slug
  const _page = await fetch(`${WP_API_URL}/wp/v2/pages?slug=${slug}&per_page=${WP_PER_PAGE}&_embed`).then(res => res.json())

  // Send data
  return {
    props: {
      _page
    },
    revalidate: 10,
    notFound: _page.length > 0 ? false : true
  }
}

export async function getStaticPaths() {

  const pages = await fetch(`${WP_API_URL}/wp/v2/pages/?per_page=${WP_PER_PAGE}`).then(res => res.json())

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }))

  return { paths, fallback: 'blocking' }
}
