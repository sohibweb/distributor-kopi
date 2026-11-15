p='src/About.jsx'
s=open(p).read()
old = 'kontrol kelembapan <12%'
new = 'kontrol kelembapan <12%'
print("Before:", old in s)
s = s.replace(old, new)
print("After:", '<12%' in s)
open(p,'w').write(s)
print("Done")
