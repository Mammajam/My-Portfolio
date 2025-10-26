import { useMemo, useState } from 'react'

const PROJECT_TYPES = [
  { id: 'landing', name: 'Landing Page', basePrice: 500, perPage: 120, baseWeeks: 1.5 },
  { id: 'marketing', name: 'Marketing Site', basePrice: 900, perPage: 160, baseWeeks: 2.5 },
  { id: 'webapp', name: 'Web App (SPA)', basePrice: 1500, perPage: 180, baseWeeks: 3.5 },
  { id: 'ecommerce', name: 'E‑commerce', basePrice: 1800, perPage: 220, baseWeeks: 4 },
  { id: 'nextfull', name: 'Next.js Full‑Stack', basePrice: 2200, perPage: 220, baseWeeks: 4.5 },
]

const FEATURES = [
  { id: 'auth', name: 'Authentication', price: 450, weeks: 0.6 },
  { id: 'cms', name: 'CMS / Headless CMS', price: 380, weeks: 0.5 },
  { id: 'payments', name: 'Payments / Checkout', price: 650, weeks: 0.8 },
  { id: 'blog', name: 'Blog / Articles', price: 260, weeks: 0.4 },
  { id: 'admin', name: 'Admin Panel', price: 900, weeks: 1.2 },
  { id: 'seo', name: 'SEO/Performance Setup', price: 300, weeks: 0.3 },
  { id: 'analytics', name: 'Analytics', price: 180, weeks: 0.2 },
  { id: 'i18n', name: 'Multi‑language (i18n)', price: 360, weeks: 0.5 },
]

const COMPLEXITY = [
  { id: 'simple', name: 'Basic', priceMultiplier: 1.0, weeksMultiplier: 1.0 },
  { id: 'standard', name: 'Standard', priceMultiplier: 1.25, weeksMultiplier: 1.15 },
  { id: 'complex', name: 'Complex', priceMultiplier: 1.6, weeksMultiplier: 1.35 },
]

const URGENCY = [
  { id: 'normal', name: 'Normal', priceMultiplier: 1.0, weeksMultiplier: 1.0 },
  { id: 'rush', name: 'Rush', priceMultiplier: 1.3, weeksMultiplier: 0.85 },
]

function formatCurrency(value) {
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
  } catch {
    return `$${Math.round(value)}`
  }
}

export default function Estimator() {
  const [projectTypeId, setProjectTypeId] = useState('nextfull')
  const [pages, setPages] = useState(6)
  const [selectedFeatures, setSelectedFeatures] = useState(['seo', 'analytics'])
  const [complexityId, setComplexityId] = useState('standard')
  const [urgencyId, setUrgencyId] = useState('normal')

  const projectType = useMemo(
    () => PROJECT_TYPES.find(p => p.id === projectTypeId) ?? PROJECT_TYPES[0],
    [projectTypeId]
  )
  const complexity = useMemo(
    () => COMPLEXITY.find(c => c.id === complexityId) ?? COMPLEXITY[1],
    [complexityId]
  )
  const urgency = useMemo(
    () => URGENCY.find(u => u.id === urgencyId) ?? URGENCY[0],
    [urgencyId]
  )

  const { totals, timelineWeeks } = useMemo(() => {
    const base = projectType.basePrice + projectType.perPage * Math.max(1, pages)
    const feats = FEATURES.filter(f => selectedFeatures.includes(f.id))
    const featureCost = feats.reduce((sum, f) => sum + f.price, 0)

    const raw = base + featureCost
    const withComplexity = raw * complexity.priceMultiplier
    const total = withComplexity * urgency.priceMultiplier

    const baseWeeks = projectType.baseWeeks + Math.max(0, pages - 1) * 0.2
    const featureWeeks = feats.reduce((sum, f) => sum + f.weeks, 0)
    const weeks = (baseWeeks + featureWeeks) * complexity.weeksMultiplier * urgency.weeksMultiplier

    return {
      totals: {
        base,
        featureCost,
        raw,
        withComplexity,
        total,
      },
      timelineWeeks: Math.max(0.8, Math.round(weeks * 10) / 10),
    }
  }, [projectType, pages, selectedFeatures, complexity, urgency])

  const whatsappText = useMemo(() => {
    const selected = FEATURES.filter(f => selectedFeatures.includes(f.id)).map(f => f.name)
    const lines = [
      `Hi Jam, I'd like a ${projectType.name}.`,
      `Pages: ${pages}`,
      `Features: ${selected.length ? selected.join(', ') : 'None'}`,
      `Complexity: ${complexity.name}`,
      `Urgency: ${urgency.name}`,
      `Estimated cost: ${formatCurrency(totals.total)}`,
      `Estimated timeline: ~${timelineWeeks} weeks`,
    ]
    return encodeURIComponent(lines.join('\n'))
  }, [projectType.name, pages, selectedFeatures, complexity.name, urgency.name, totals.total, timelineWeeks])

  const toggleFeature = (id) => {
    setSelectedFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  }

  return (
    <section className="relative isolate bg-white px-6 pb-20 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-blue-500">Estimator</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Plan your project and see a rough estimate</p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Adjust options to outline scope. This is a ballpark for discussion, not a final quote.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-5">
        {/* Left controls */}
        <div className="md:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700">Project type</label>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PROJECT_TYPES.map(p => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProjectTypeId(p.id)}
                  className={`text-left rounded-lg border px-3 py-2 text-sm ${projectTypeId === p.id ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-xs text-gray-500">Base {formatCurrency(p.basePrice)} · {formatCurrency(p.perPage)}/page</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="pages" className="block text-sm font-medium text-gray-700">Approx. number of pages/screens</label>
            <div className="mt-2 flex items-center gap-3">
              <input
                id="pages"
                type="range"
                min={1}
                max={20}
                step={1}
                value={pages}
                onChange={e => setPages(Number(e.target.value))}
                className="w-full"
              />
              <input
                type="number"
                min={1}
                max={99}
                value={pages}
                onChange={e => setPages(Math.max(1, Number(e.target.value) || 1))}
                className="w-20 rounded-md border border-gray-200 px-2 py-1 text-center text-sm"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-baseline justify-between">
              <label className="block text-sm font-medium text-gray-700">Features</label>
              <button
                type="button"
                onClick={() => setSelectedFeatures([])}
                className="text-xs text-gray-500 hover:text-gray-700"
                aria-label="Clear all features"
              >Clear</button>
            </div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FEATURES.map(f => (
                <label key={f.id} className={`flex items-start gap-3 rounded-lg border px-3 py-2 text-sm ${selectedFeatures.includes(f.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(f.id)}
                    onChange={() => toggleFeature(f.id)}
                    className="mt-1"
                  />
                  <span>
                    <span className="font-medium">{f.name}</span>
                    <span className="block text-xs text-gray-500">+{formatCurrency(f.price)} · ~{f.weeks}w</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Complexity</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {COMPLEXITY.map(c => (
                  <label key={c.id} className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm ${complexityId === c.id ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="complexity" className="sr-only" checked={complexityId === c.id} onChange={() => setComplexityId(c.id)} />
                    {c.name}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Urgency</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {URGENCY.map(u => (
                  <label key={u.id} className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm ${urgencyId === u.id ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="urgency" className="sr-only" checked={urgencyId === u.id} onChange={() => setUrgencyId(u.id)} />
                    {u.name}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right summary */}
        <div className="md:col-span-2 rounded-2xl bg-gray-900 text-gray-100 p-6 shadow-2xl ring-1 ring-gray-900/10">
          <h3 className="text-base/7 font-semibold text-blue-400">Your estimate</h3>
          <div className="mt-4 space-y-3 text-sm/6">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Base + pages</span>
              <span className="font-medium">{formatCurrency(totals.base)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Features</span>
              <span className="font-medium">{formatCurrency(totals.featureCost)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Complexity</span>
              <span className="font-medium">× {complexity.priceMultiplier.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Urgency</span>
              <span className="font-medium">× {urgency.priceMultiplier.toFixed(2)}</span>
            </div>
            <hr className="my-2 border-gray-700" />
            <div className="flex items-center justify-between text-lg">
              <span className="text-gray-300">Estimated total</span>
              <span className="font-semibold text-white">{formatCurrency(totals.total)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Timeline</span>
              <span className="font-medium">~{timelineWeeks} weeks</span>
            </div>
          </div>

          <a
            href={`https://wa.me/231881983209?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Send on WhatsApp
          </a>
          <p className="mt-3 text-xs text-gray-400">Estimates are indicative and may change after a detailed scope discussion.</p>
        </div>
      </div>
    </section>
  )
}
