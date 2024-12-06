import math

def fold_array(array = [], runs = 0):
    mix = array

    for x in runs:
        half = math.ceil(len(mix) / 2)
        print(half)

fold_array([ 1, 2, 3, 4, 5 ], 1)