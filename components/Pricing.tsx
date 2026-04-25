import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Básico',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$19',
    description: 'Ideal para empezar a capturar tus primeros leads..',
    features: ['Hasta 100 leads al mes', 'Panel básico de gestión', 'Exportación a Excel', 'Soporte estándar'],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$49',
    description: 'Perfecto para negocios que quieren escalar ventas.',
    features: [
      'Leads ilimitados',
      'Panel avanzado',
      'Seguimiento de leads',
      'Notificaciones en tiempo real',
      'Exportación CSV/Excel',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Solución completa para equipos y empresas.',
    features: [
      'Todo lo del plan Pro',
      'Integración con API',
      'Automatizaciones',
      'Soporte prioritario',
      'Implementación personalizada',
    ],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Precios</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Planes simples para crecer tus ventas
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          Elige el plan ideal para capturar, gestionar y convertir más leads sin complicaciones.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? '-mr-px lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? '-ml-px lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 inset-ring inset-ring-gray-200 xl:p-10',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                      'text-lg/8 font-semibold',
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  <span className="text-sm/6 font-semibold text-gray-600">/mes</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500'
                    : 'text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
              >
                Empezar
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
