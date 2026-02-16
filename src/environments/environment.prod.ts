// Production environment configuration
// IMPORTANT: Only enable ads on content-rich pages (home page)
export const environment = {
  production: true,
  adsense: {
    enabled: true,   // Enable ads in production
    publisherId: 'ca-pub-1686089400711825',
    adSlots: {
      homeTop: '1941857659',
      homeBottom: '6630678174',
    }
  }
};
