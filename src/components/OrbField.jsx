import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function OrbField() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    let width = host.clientWidth || 1
    let height = host.clientHeight || 1

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100)
    camera.position.set(0, 0, 9)

    scene.add(new THREE.HemisphereLight(0xffffff, 0xffd9b0, 0.85))
    const key = new THREE.DirectionalLight(0xffffff, 1.15)
    key.position.set(4, 6, 8)
    scene.add(key)
    const rim = new THREE.PointLight(0xff5029, 18, 40)
    rim.position.set(-6, -3, 5)
    scene.add(rim)

    const group = new THREE.Group()
    scene.add(group)

    const floaters = []
    const addFloater = (geometry, color, x, y, z) => {
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.05 }),
      )
      mesh.position.set(x, y, z)
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      mesh.userData = { by: y, sp: 0.6 + Math.random() * 0.7, amp: 0.22 + Math.random() * 0.25 }
      group.add(mesh)
      floaters.push(mesh)
      return mesh
    }

    addFloater(new THREE.TorusKnotGeometry(1.05, 0.34, 160, 24), 0xff7503, 3.4, 0.4, -0.5)
    addFloater(new THREE.SphereGeometry(0.82, 48, 48), 0xff5029, -3.6, 1.7, -1.2)
    addFloater(new THREE.SphereGeometry(0.42, 32, 32), 0xffb25c, -2.3, -2.0, 0.6)
    addFloater(new THREE.TorusGeometry(0.68, 0.24, 24, 64), 0xffd9ae, 1.5, -2.3, 0.2)
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.55, 0),
      new THREE.MeshBasicMaterial({ color: 0xff7503, wireframe: true, transparent: true, opacity: 0.55 }),
    )
    wire.position.set(0.2, 2.6, -2.2)
    group.add(wire)

    const mouse = { tx: 0, ty: 0, x: 0, y: 0 }
    const onPointerMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onPointerMove)

    const resize = () => {
      width = host.clientWidth || 1
      height = host.clientHeight || 1
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(host)

    const clock = new THREE.Clock()
    let raf
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      mouse.x += (mouse.tx - mouse.x) * 0.04
      mouse.y += (mouse.ty - mouse.y) * 0.04

      group.rotation.y = t * 0.09 + mouse.x * 0.28
      group.rotation.x = Math.sin(t * 0.12) * 0.06 + mouse.y * 0.16

      floaters.forEach((m, i) => {
        m.position.y = m.userData.by + Math.sin(t * m.userData.sp + i * 1.7) * m.userData.amp
        m.rotation.z += 0.0016
      })
      wire.rotation.x += 0.004
      wire.rotation.y += 0.003

      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointerMove)
      observer.disconnect()
      group.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose()
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
          else obj.material.dispose()
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={hostRef} className="orbfield" aria-hidden="true" />
}
