Now that I've learned about concurrency, I want to share this really funny "sorting" algorithm I found that claimed to be *supposedly* O(n). 
```py
import threading
import time
import random

def add_item(arr, item, timeout):
    time.sleep(timeout)
    arr.append(item)


# arr = [random.randint(1,100) for _ in range(50)]
arr = [5,9,1,2,4,3,7,10,8]
sorted_arr = []

max_item = max(arr) # O(n)

threads = []

# This loop is O(n* thread overhead)
for item in arr:
    t = threading.Thread(target=add_item, args=(sorted_arr,item, item/max_item))
    t.start()
    threads.append(t)

for t in threads:
    t.join()

print("Answer:", sorted_arr)
print("Actual:", sorted(arr))
```


## Is it not O(n)??

