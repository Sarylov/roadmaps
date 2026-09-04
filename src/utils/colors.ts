const LEVEL_COLORS = [
  { accent: 'bg-[#e8a598]', bg: 'bg-[#fdf0ed]', border: 'border-[#f0d8d4]', text: 'text-[#8f4e42]', chip: 'bg-[#f8e0db]', chipText: 'text-[#7a453c]', badge: 'bg-[#e8a598]' },
  { accent: 'bg-[#e4b48a]', bg: 'bg-[#fdf4eb]', border: 'border-[#f0e0cc]', text: 'text-[#8a5a35]', chip: 'bg-[#f6e6d6]', chipText: 'text-[#7a5232]', badge: 'bg-[#e4b48a]' },
  { accent: 'bg-[#d4c07a]', bg: 'bg-[#faf7eb]', border: 'border-[#ebe3c8]', text: 'text-[#726528]', chip: 'bg-[#f3ecd4]', chipText: 'text-[#655820]', badge: 'bg-[#d4c07a]' },
  { accent: 'bg-[#b5c98a]', bg: 'bg-[#f3f7eb]', border: 'border-[#dde8c8]', text: 'text-[#4f6430]', chip: 'bg-[#e5edd6]', chipText: 'text-[#465a2c]', badge: 'bg-[#b5c98a]' },
  { accent: 'bg-[#8fc4a8]', bg: 'bg-[#eef7f2]', border: 'border-[#cfe5da]', text: 'text-[#3a6b55]', chip: 'bg-[#dceee5]', chipText: 'text-[#345e4b]', badge: 'bg-[#8fc4a8]' },
  { accent: 'bg-[#7ebdb8]', bg: 'bg-[#eef7f6]', border: 'border-[#cce4e1]', text: 'text-[#2f6360]', chip: 'bg-[#d9ecea]', chipText: 'text-[#2a5855]', badge: 'bg-[#7ebdb8]' },
  { accent: 'bg-[#7eb4cb]', bg: 'bg-[#eef5f9]', border: 'border-[#cddfeb]', text: 'text-[#355f73]', chip: 'bg-[#d9e8f1]', chipText: 'text-[#2f5566]', badge: 'bg-[#7eb4cb]' },
  { accent: 'bg-[#8aa8d4]', bg: 'bg-[#eef2f9]', border: 'border-[#d0dbeb]', text: 'text-[#3d5678]', chip: 'bg-[#dde6f3]', chipText: 'text-[#364c6b]', badge: 'bg-[#8aa8d4]' },
  { accent: 'bg-[#9ea0c9]', bg: 'bg-[#f1f1f8]', border: 'border-[#d8d8e8]', text: 'text-[#4d4f75]', chip: 'bg-[#e2e2ef]', chipText: 'text-[#45476a]', badge: 'bg-[#9ea0c9]' },
  { accent: 'bg-[#b89bc4]', bg: 'bg-[#f5f0f7]', border: 'border-[#e3d6e9]', text: 'text-[#654e70]', chip: 'bg-[#eadfed]', chipText: 'text-[#5a4664]', badge: 'bg-[#b89bc4]' },
  { accent: 'bg-[#c99bb0]', bg: 'bg-[#f8f0f4]', border: 'border-[#ead6e0]', text: 'text-[#734d60]', chip: 'bg-[#efdfe7]', chipText: 'text-[#664556]', badge: 'bg-[#c99bb0]' },
  { accent: 'bg-[#d4a09a]', bg: 'bg-[#f9f1f0]', border: 'border-[#ebd8d5]', text: 'text-[#78534e]', chip: 'bg-[#f0e1df]', chipText: 'text-[#6b4a46]', badge: 'bg-[#d4a09a]' },
]

export function getLevelColor(level: number) {
  return LEVEL_COLORS[level % LEVEL_COLORS.length]
}

const PRIORITY_STYLES = {
  CORE: 'bg-[#d9ebe3] text-[#3a6b55]',
  KILLER: 'bg-[#f5ddd8] text-[#8f4e42]',
  OPT: 'bg-[#ebe7e2] text-[#6b6560]',
} as const

export function getPriorityStyle(priority: keyof typeof PRIORITY_STYLES) {
  return PRIORITY_STYLES[priority]
}
