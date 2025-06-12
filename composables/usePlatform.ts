export default function useMobilePlatform() {
  const isMobilePlatform = ref(true)

  function isMobile() {
    const userAgent = window.navigator.userAgent
    const mobileRegex = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
    return mobileRegex.test(userAgent)
  }

  onMounted(() => {
    isMobilePlatform.value = isMobile()
    console.log('isMobilePlatform', isMobilePlatform.value)
  })
  return { isMobilePlatform }
}
