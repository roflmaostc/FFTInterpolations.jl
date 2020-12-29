var documenterSearchIndex = {"docs":
[{"location":"#FFTInterpolations.jl","page":"FFTInterpolations.jl","title":"FFTInterpolations.jl","text":"","category":"section"},{"location":"","page":"FFTInterpolations.jl","title":"FFTInterpolations.jl","text":"Here you can find the docstrings of all functions.","category":"page"},{"location":"","page":"FFTInterpolations.jl","title":"FFTInterpolations.jl","text":"sinc_interpolate\nsinc_interpolate_sum\nFFTInterpolations.downsample","category":"page"},{"location":"#FFTInterpolations.sinc_interpolate","page":"FFTInterpolations.jl","title":"FFTInterpolations.sinc_interpolate","text":"sinc_interpolate(arr, new_size)\n\nCalculates the sinc interpolation of an arr on a new array size new_size. This method is based on FFTs and therefore implicitly assumes periodic boundaries and a finite frequeny support.\n\nExamples\n\njulia> sinc_interpolate([1.0, 2.0, 3.0, 4.0], 8)\n8-element Array{Float64,1}:\n 1.0\n 1.085786437626905\n 2.0\n 2.5\n 3.0\n 3.914213562373095\n 4.0\n 2.5\n\njulia> sinc_interpolate([1.0  2.0; 3.0 4.0], (4,4))\n4×4 Array{Float64,2}:\n 1.0  1.5  2.0  1.5\n 2.0  2.5  3.0  2.5\n 3.0  3.5  4.0  3.5\n 2.0  2.5  3.0  2.5\n\n\n\n\n\n","category":"function"},{"location":"#FFTInterpolations.sinc_interpolate_sum","page":"FFTInterpolations.jl","title":"FFTInterpolations.sinc_interpolate_sum","text":"sinc_interpolate_sum(arr, new_length)\n\nCalculates the sinc interpolation of an 1D arr on a new array size new_size.  This method is slow, because of an explicit sum evalulation and not a FFT based evaluation.\n\nExamples\n\njulia> sinc_interpolate_sum([1.0, 2.0, 3.0, 4.0], 8)\n8-element Array{Float64,1}:\n 1.0\n 1.7825353626292277\n 2.0\n 2.1220659078919377\n 3.0\n 4.1592491794681985\n 4.0\n 2.073561544282979\n\n\n\n\n\n","category":"function"},{"location":"#FFTInterpolations.downsample","page":"FFTInterpolations.jl","title":"FFTInterpolations.downsample","text":"downsample(arr, new_size)\n\nDownsample an array arr to the new size new_size. This is calculated by cutting a centered frequency window from the frequency spectrum and going back to real space with an ifft.\n\nExamples\n\njulia> FFTInterpolations.downsample([1.0, 0.0, 1.0, 0.0, 1.0, 0.0], [3])\n3-element Array{Float64,1}:\n 0.5\n 0.5\n 0.5\n\njulia> FFTInterpolations.downsample([1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0], [6])\n6-element Array{Float64,1}:\n 0.6666666666666666\n 0.0\n 0.6666666666666666\n 0.0\n 0.6666666666666666\n 0.0\n\n\n\n\n\n","category":"function"},{"location":"","page":"FFTInterpolations.jl","title":"FFTInterpolations.jl","text":"Additionally we have some utility functions:","category":"page"},{"location":"","page":"FFTInterpolations.jl","title":"FFTInterpolations.jl","text":"FFTInterpolations.center_extract\nFFTInterpolations.center_set!\nFFTInterpolations.center_pos\nFFTInterpolations.get_indices_around_center","category":"page"},{"location":"#FFTInterpolations.center_extract","page":"FFTInterpolations.jl","title":"FFTInterpolations.center_extract","text":"center_extract(arr, new_size)\n\nExtracts a center of an array.  new_size must be list of sizes indicating the output size of each dimension. Centered means that a center frequency stays at the center position. Works for even and uneven. If length(new_size) < length(size(arr)) the remaining dimensions are untouched and copied.\n\nExamples\n\njulia> center_extract([[1,2] [3, 4]], [1])\n1×2 Array{Int64,2}:\n 2  4\njulia> center_extract([[1,2] [3, 4]], [1, 1])\n1×1 Array{Int64,2}:\n4\n\n\n\n\n\n","category":"function"},{"location":"#FFTInterpolations.center_set!","page":"FFTInterpolations.jl","title":"FFTInterpolations.center_set!","text":"center_set!(arr_large, arr_small)\n\nPuts the arr_small central into arr_large. The convention, where the center is, is the same as the definition as for FFT based centered. Function works both for even and uneven arrays.\n\nExamples\n\njulia> center_set!([1, 1, 1, 1, 1, 1], [5, 5, 5])\n6-element Array{Int64,1}:\n 1\n 1\n 5\n 5\n 5\n 1\n\n\n\n\n\n","category":"function"},{"location":"#FFTInterpolations.center_pos","page":"FFTInterpolations.jl","title":"FFTInterpolations.center_pos","text":"center_pos(x)\n\nCalculate the position of the center frequency. Size of the array is x\n\nExamples\n\njulia> center_pos(3)\n2\njulia> center_pos(4)\n3\n\n\n\n\n\n","category":"function"},{"location":"#FFTInterpolations.get_indices_around_center","page":"FFTInterpolations.jl","title":"FFTInterpolations.get_indices_around_center","text":"get_indices_around_center(i_in, i_out)\n\nA function which provides two output indices i1 and i2 where i2 - i1 = i_out The indices are chosen in a way that the set i1:i2 cuts the interval 1:i_in in a way that the center frequency stays at the center position. Works for both odd and even indices\n\n\n\n\n\n","category":"function"}]
}
