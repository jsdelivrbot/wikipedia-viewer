import $ from 'jquery'
import { FETCH_WIKI } from './types'

const WIKI_ROOT_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=5&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='

export const fetchWiki = (title) => {
  return new Promise((resolve, reject) => {
    $.getJSON(`${WIKI_ROOT_URL}${title}&callback=?`, ({ query }) => {
      const pageKeys = Object.keys(query.pages)
      const pages = pageKeys.map(page => query.pages[page])

      resolve({
        type: FETCH_WIKI, payload: pages
      })
    })
  })
}