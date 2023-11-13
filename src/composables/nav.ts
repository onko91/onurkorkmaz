import { onMounted } from 'vue'

export function useSectionIsInViewport() {
  onMounted(() => {
    const sections = document.querySelectorAll('section')
    const aElement = document.querySelectorAll('nav .navbar-menu a')
    window.onscroll = () => {
      let current: any = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (scrollY >= sectionTop - 120) {
          current = section.getAttribute('id')
        }
        if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight) {
          current = 'contact'
        }
      })

      aElement.forEach((a) => {
        a.classList.remove('active-link')
        if (a.href.includes(current)) {
          a.classList.add('active-link')
        }
      })
    }
  })
}
