function UserMenu({ name }: { name: string }) {
  return (
    <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: '#0f2d5e', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{name.charAt(0).toUpperCase()}</div>
      <div style={{ fontSize: 13 }}>{name}</div>
    </div>
  )
}
export default UserMenu
