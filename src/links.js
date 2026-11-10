// ✏️ EDIT THIS FILE to personalize everything.
import {
  FaFacebookF, FaTiktok, FaInstagram, FaXTwitter, FaThreads, FaDiscord,
  FaTelegram, FaWhatsapp, FaViber, FaYoutube, FaEnvelope, FaWallet, FaCoins,
} from 'react-icons/fa6'

export const profile = {
  name: "zeer's here!",
  tagline: "Looking to get in touch?",
  avatar: 'Personalized-Accessible-Card/public/avatar.png',      // put your image in /public/avatar.png
  footer: '© 2026 · zeer',
  visibleCount: 8,             // links shown before "Show more"
}

export const links = [
  { name: 'Facebook',  handle: '@zeerseer', url: 'https://www.facebook.com/zeerseer/', icon: FaFacebookF },
  { name: 'TikTok',    handle: '@runnerminho', url: 'https://www.tiktok.com/@runnerminho?is_from_webapp=1&sender_device=pc', icon: FaTiktok },
  { name: 'Instagram', handle: '@hiszeer', url: 'https://www.instagram.com/hiszeer/', icon: FaInstagram },
  { name: 'X',         handle: '@hiszeer', url: 'https://x.com/hiszeer', icon: FaXTwitter },
  { name: 'Threads',   handle: '@hiszeer', url: 'https://www.threads.com/@hiszeer', icon: FaThreads },
  { name: 'Discord',   handle: 'hiszeer', url: 'https://discord.com/users/839704422934380555', icon: FaDiscord },
  { name: 'Telegram',  handle: '@hiszeer', url: 'https://t.me/hiszeer', icon: FaTelegram },
  { name: 'Email',     handle: 'runnerminho14@gmail.com', url: 'https://mail.google.com/mail/u/3/#inbox?compose=GTvVlcRzBlGJQNhSpgQqRgwtHDZNFjfbSpFmfRVwBvPFVsQKLHmvwNQGMxHjkMZrjmfQKcTBqjrhP', icon: FaEnvelope },
  { name: 'WhatsApp',  handle: '+63 900 000 0000', url: 'https://wa.me/639297617613', icon: FaWhatsapp },
  { name: 'Viber',     handle: '+63 900 000 0000', url: 'viber://chat?number=%2B639297617613', icon: FaViber },
  { name: 'YouTube',   handle: '@minhorunner6157', url: 'https://youtube.com/@minhorunner6157', icon: FaYoutube },
]

// Tip buttons open a QR popup. Put images in /public/qr/
export const tips = [
  { name: 'GCash',   qr: './qr/gcash.jpg',   icon: FaWallet },
  { name: 'Maribank', qr: './qr/maribank.png', icon: FaWallet },
]
