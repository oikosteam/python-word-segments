from wordsegment import load, segment
from sys import argv

script, firstargument = argv

load()
print(segment(firstargument),end="")
