def fold_array(array=None, runs=0):
    if array is None:
        array = []
    
    mix_list = array[:]
    
    for _ in range(runs):
        half = (len(mix_list) + 1) // 2
        
        h1 = mix_list[:half]
        h2 = mix_list[half:][::-1]
        
        mix_list = [
            num + h2[index] if index < len(h2) else num
            for index, num in enumerate(h1)
        ]
    
    return mix_list