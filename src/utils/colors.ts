const LEVEL_COLORS = [
  {
    accent: 'bg-[#e8a598] dark:bg-[#c47f74]',
    bg: 'bg-[#fdf0ed] dark:bg-[#2a1c1a]',
    border: 'border-[#f0d8d4] dark:border-[#4a322e]',
    text: 'text-[#8f4e42] dark:text-[#e8b4ab]',
    chip: 'bg-[#f8e0db] dark:bg-[#3a2825]',
    chipText: 'text-[#7a453c] dark:text-[#d9a79e]',
  },
  {
    accent: 'bg-[#e4b48a] dark:bg-[#c49268]',
    bg: 'bg-[#fdf4eb] dark:bg-[#2a2018]',
    border: 'border-[#f0e0cc] dark:border-[#4a3a2c]',
    text: 'text-[#8a5a35] dark:text-[#e4c09a]',
    chip: 'bg-[#f6e6d6] dark:bg-[#3a2e22]',
    chipText: 'text-[#7a5232] dark:text-[#d4b08a]',
  },
  {
    accent: 'bg-[#d4c07a] dark:bg-[#b09c58]',
    bg: 'bg-[#faf7eb] dark:bg-[#272418]',
    border: 'border-[#ebe3c8] dark:border-[#45402c]',
    text: 'text-[#726528] dark:text-[#d4c890]',
    chip: 'bg-[#f3ecd4] dark:bg-[#35301f]',
    chipText: 'text-[#655820] dark:text-[#c4b878]',
  },
  {
    accent: 'bg-[#b5c98a] dark:bg-[#8fa868]',
    bg: 'bg-[#f3f7eb] dark:bg-[#1f2618]',
    border: 'border-[#dde8c8] dark:border-[#38452c]',
    text: 'text-[#4f6430] dark:text-[#c0d49a]',
    chip: 'bg-[#e5edd6] dark:bg-[#2a3422]',
    chipText: 'text-[#465a2c] dark:text-[#aec488]',
  },
  {
    accent: 'bg-[#8fc4a8] dark:bg-[#6aa488]',
    bg: 'bg-[#eef7f2] dark:bg-[#18241f]',
    border: 'border-[#cfe5da] dark:border-[#2e453c]',
    text: 'text-[#3a6b55] dark:text-[#a8d4c0]',
    chip: 'bg-[#dceee5] dark:bg-[#24342e]',
    chipText: 'text-[#345e4b] dark:text-[#94c4ae]',
  },
  {
    accent: 'bg-[#7ebdb8] dark:bg-[#5a9c98]',
    bg: 'bg-[#eef7f6] dark:bg-[#182422]',
    border: 'border-[#cce4e1] dark:border-[#2e4542]',
    text: 'text-[#2f6360] dark:text-[#9cd4d0]',
    chip: 'bg-[#d9ecea] dark:bg-[#243432]',
    chipText: 'text-[#2a5855] dark:text-[#88c0bc]',
  },
  {
    accent: 'bg-[#7eb4cb] dark:bg-[#5a94ab]',
    bg: 'bg-[#eef5f9] dark:bg-[#182028]',
    border: 'border-[#cddfeb] dark:border-[#2e3e4a]',
    text: 'text-[#355f73] dark:text-[#a8cce0]',
    chip: 'bg-[#d9e8f1] dark:bg-[#242e38]',
    chipText: 'text-[#2f5566] dark:text-[#94b8cc]',
  },
  {
    accent: 'bg-[#8aa8d4] dark:bg-[#6a88b4]',
    bg: 'bg-[#eef2f9] dark:bg-[#181c28]',
    border: 'border-[#d0dbeb] dark:border-[#2e364a]',
    text: 'text-[#3d5678] dark:text-[#b0c4e4]',
    chip: 'bg-[#dde6f3] dark:bg-[#242a38]',
    chipText: 'text-[#364c6b] dark:text-[#9cb0d0]',
  },
  {
    accent: 'bg-[#9ea0c9] dark:bg-[#7e80a9]',
    bg: 'bg-[#f1f1f8] dark:bg-[#1c1c28]',
    border: 'border-[#d8d8e8] dark:border-[#36364a]',
    text: 'text-[#4d4f75] dark:text-[#c0c0e0]',
    chip: 'bg-[#e2e2ef] dark:bg-[#2a2a38]',
    chipText: 'text-[#45476a] dark:text-[#a8a8c8]',
  },
  {
    accent: 'bg-[#b89bc4] dark:bg-[#987ba4]',
    bg: 'bg-[#f5f0f7] dark:bg-[#221c28]',
    border: 'border-[#e3d6e9] dark:border-[#3e344a]',
    text: 'text-[#654e70] dark:text-[#d4bce0]',
    chip: 'bg-[#eadfed] dark:bg-[#322838]',
    chipText: 'text-[#5a4664] dark:text-[#c0a8cc]',
  },
  {
    accent: 'bg-[#c99bb0] dark:bg-[#a97b90]',
    bg: 'bg-[#f8f0f4] dark:bg-[#261c22]',
    border: 'border-[#ead6e0] dark:border-[#4a3440]',
    text: 'text-[#734d60] dark:text-[#e0bcd0]',
    chip: 'bg-[#efdfe7] dark:bg-[#382830]',
    chipText: 'text-[#664556] dark:text-[#cca8bc]',
  },
  {
    accent: 'bg-[#d4a09a] dark:bg-[#b4807a]',
    bg: 'bg-[#f9f1f0] dark:bg-[#261c1a]',
    border: 'border-[#ebd8d5] dark:border-[#4a3430]',
    text: 'text-[#78534e] dark:text-[#e0bcb8]',
    chip: 'bg-[#f0e1df] dark:bg-[#382826]',
    chipText: 'text-[#6b4a46] dark:text-[#cca8a4]',
  },
]

export function getLevelColor(level: number) {
  return LEVEL_COLORS[level % LEVEL_COLORS.length]
}

const PRIORITY_STYLES = {
  CORE: 'bg-[#d9ebe3] text-[#3a6b55] dark:bg-[#24342e] dark:text-[#a8d4c0]',
  KILLER: 'bg-[#f5ddd8] text-[#8f4e42] dark:bg-[#3a2825] dark:text-[#e8b4ab]',
  OPT: 'bg-[#ebe7e2] text-[#6b6560] dark:bg-[#2c2825] dark:text-[#a89f96]',
} as const

export function getPriorityStyle(priority: keyof typeof PRIORITY_STYLES) {
  return PRIORITY_STYLES[priority]
}
