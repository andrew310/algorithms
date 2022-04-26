
function search(nums: number[], target: number): number {
    let startpoint = 0,
      endpoint = nums.length - 1,
      midpoint = Math.floor((endpoint - startpoint) / 2)

    while (startpoint <= endpoint) {
        midpoint = startpoint + Math.floor((endpoint - startpoint) / 2)
        if (nums[midpoint] < target) {
            startpoint = midpoint + 1
        } else if (nums[midpoint] > target) {
            endpoint = midpoint - 1
        }
        if(nums[midpoint] === target) return midpoint
    }

    return -1
}

