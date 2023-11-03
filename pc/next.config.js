/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode : false,
  images : {
    domains : ['gifpng.com', 'source.unsplash.com', 'picsum.photos'],
  },
  async redirects() {
    return [
      {
        source : '/',// 들어오는 요청 경로 패턴
        destination : '/markup/PageSitemap',// 라우팅 하려는 경로( 프로젝트 외부로도 가능 )
        permanent : false,// 브라우저나 검색엔진이 이 정보를 기억하는지 여부 결정s
      },
    ]
  },
}
module.exports = nextConfig
