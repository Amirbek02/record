/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  domains: ['api.recordonline.kg'],
	},
  };
  
  module.exports = nextConfig;
  
//   module.exports = {
// 	async redirects() {
// 	  return [
// 		{
// 		  source: '/example',
// 		  destination: '/example',
// 		  permanent: true,
// 		},
// 	  ];
// 	},
//   };