"use client"

import { useState } from "react"
import * as yup from "yup"

const schema = yup.object({
  nombre: yup.string().required("Nombre requerido"),
  correo: yup.string().email("Correo inválido").required("Correo requerido"),
  telefono: yup.string().required("Teléfono requerido"),
  company: yup.string().nullable(),
  mensaje: yup.string().nullable(),
})

export default function Example() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    company: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const validData = await schema.validate(formData, {
        abortEarly: false,
      })

      setErrors({})

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(validData),
      })

      if (!res.ok) {
        throw new Error("No se pudo enviar el formulario")
      }

      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        company: "",
        mensaje: "",
      })

      setSuccess(true)
    } catch (err: any) {
      const newErrors: Record<string, string> = {}

      if (err.inner) {
        err.inner.forEach((e: any) => {
          if (e.path) newErrors[e.path] = e.message
        })
      } else {
        newErrors.general = "Ocurrió un error al enviar el formulario"
      }

      setErrors(newErrors)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Empieza a recibir más leads hoy
        </h2>

        <p className="mt-2 text-lg/8 text-gray-600">
          Déjanos tus datos y comienza a gestionar tus prospectos con LeadFlow.
        </p>

        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form onSubmit={handleSubmit} className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Nombre
                </label>
                <input
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Correo electrónico
                </label>
                <input
                  name="correo"
                  type="email"
                  value={formData.correo}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
                {errors.correo && (
                  <p className="mt-1 text-sm text-red-500">{errors.correo}</p>
                )}
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Teléfono
                </label>
                <input
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
                )}
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Empresa
                </label>
                <input
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {errors.general && (
              <p className="mt-4 text-sm text-red-500">{errors.general}</p>
            )}

            {success && (
              <p className="mt-4 text-sm text-green-600">
                Lead enviado correctamente.
              </p>
            )}

            <div className="mt-10">
              <button
                type="submit"
                disabled={loading}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Quiero empezar"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl text-center">

            {/* Icono */}
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100">
                <span className="text-green-600 text-xl">✓</span>
              </div>
            </div>

            {/* Texto */}
            <h3 className="text-lg font-semibold text-gray-900">
              ¡Formulario enviado!
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Hemos recibido tu información correctamente. Pronto te estaremos contactando.
            </p>

            {/* Botón */}
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  )

}
